module.exports = function navigate(
  location = { position: 0, depth: 0 },
  instructions
) {

  if (!instructions) return location;

  const newLocation = Object.assign({}, location);
  instructions.split('\n').forEach(apply);
  return newLocation;

  function apply(instruction) {
    newLocation[dimension(instruction)] += distance(instruction);
  }
};

function dimension(instruction) {
  return verb(instruction) === "forward" ? "position" : "depth";
}

function direction(instruction) {
  return verb(instruction) == "up" ? -1 : 1;
}

function verb(instruction) {
  return instruction.split(" ")[0];
}

function distance(instruction) {
  return Math.max(
    0,
    direction(instruction) * parseInt(instruction.split(" ")[1])
  );
}
