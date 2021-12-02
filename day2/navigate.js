module.exports = function navigate(
  origin = { position: 0, depth: 0 },
  instructions
) {

  if (!instructions) return origin;

  const destination = Object.assign({}, origin);
  instructions.split('\n').forEach(apply);
  return destination;

  function apply(instruction) {
    destination[dimension(instruction)] += distance(instruction);
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
