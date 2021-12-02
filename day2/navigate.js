module.exports = function navigate(
  location = { position: 0, depth: 0 },
  instructions
) {
  if (!instructions) return location;

  const newLocation = Object.assign({}, location);

  if (direction(instructions) == "forward") 
    newLocation.position = 1;
  else newLocation.depth = distance(instructions);

  return newLocation;

  function direction(instruction) {
    return instructions.split(' ')[0];
  }

  function distance(instruction) {
      return parseInt(instruction.split(' ')[1]);
  }
};
