module.exports = function navigate(
  location = { position: 0, depth: 0 },
  instructions
) {
  if (!instructions) return location;

  const newLocation = Object.assign({}, location);

  instructions.split('\n').forEach(apply);
  
  return newLocation;
  
  function apply(instruction) {
      newLocation[dimension(instruction)] = 
        distance(instruction);
  }

  function dimension(instruction) {
      const direction = instruction.split(' ')[0];
      if (direction == "forward")
        return "position";
      else 
        return "depth";
  }

  function distance(instruction) {
      return parseInt(instruction.split(' ')[1]);
  }
};
