module.exports = function navigate(
  location = { position: 0, depth: 0 },
  instructions
) {
  if (!instructions) return location;

  const newLocation = Object.assign({}, location);

  instructions.split("\n").forEach(apply);

  return newLocation;

  function apply(instruction) {
    newLocation[dimension(instruction)] += distance(instruction);
  }
};

function dimension(instruction) {
  const direction = instruction.split(" ")[0];
  if (direction == "forward") return "position";
  else return "depth";
}

function direction(instruction) {
    const verb = instruction.split(" ")[0];
    if (verb == "up")
      return -1;

    return 1;
}

function verb(instruction) {
  return instruction.split(" ")[0];
}

function distance(instruction) {
  return Math.max(0, 
    direction(instruction) * 
    parseInt(instruction.split(" ")[1]));
}
