module.exports = function navigate(
  origin = { position: 0, depth: 0 },
  instructions
) {

  if (!instructions) return origin;

  const destination = Object.assign({}, origin);
  instructions.split('\n').forEach(apply);
  return destination;

  function apply(instruction) {
    const dim = dimension(instruction);
    destination[dim] += distance(instruction);
    destination[dim] = Math.max(0, destination[dim]);
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
  return direction(instruction) 
       * parseInt(instruction.split(" ")[1]);
}
