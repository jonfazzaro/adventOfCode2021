module.exports = { navigate, navigateWithAim };

function navigate(
  origin = { position: 0, depth: 0 },
  instructions,
  strategy = standard
) {
  if (!instructions) return origin;

  const destination = Object.assign({}, origin);
  instructions
    .split("\n")
    .map((i) => i.trim())
    .filter(valid)
    .forEach(strategy(destination));
  return destination;
}

function navigateWithAim(origin, instructions) {
  return navigate(origin, instructions, withAim);
}

function standard(destination) {
  return (instruction) => {
    destination[dimension(instruction)] += distance(instruction);
    normalize(destination);
  };
}

function withAim(destination) {
  return (instruction) => {
    if (verb(instruction) == "forward") {
      destination.position += distance(instruction);
      destination.aim = destination.aim || 0;
      destination.depth += destination.aim * distance(instruction);
    } else destination.aim += distance(instruction);

    normalize(destination);
  };
}

function normalize(location) {
  location.position = Math.max(0, location.position);
  location.depth = Math.max(0, location.depth);
}

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
  return direction(instruction) * parseInt(instruction.split(" ")[1]);
}

function valid(i) {
  return i.split(" ").length == 2;
}
