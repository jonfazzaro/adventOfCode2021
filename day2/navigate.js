module.exports = function navigate(
  location = { position: 0, depth: 0 },
  instructions
) {
  if (!instructions) return location;

  const newLocation = Object.assign({}, location);

    newLocation[dimension(instructions)] = distance(instructions);

  return newLocation;

  function dimension(instruction) {
      const direction = instructions.split(' ')[0];
      if (direction == "forward")
        return "position";
      else 
        return "depth";
  }

  function distance(instruction) {
      return parseInt(instruction.split(' ')[1]);
  }
};
