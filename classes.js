class EnvironmentObject {
  constructor({
    id,
    name,
    image,
    x,
    y,
    width,
    height,
    polygon,
    onClick
  }) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.position = { x, y, width, height };
    this.polygon = polygon;
    this.onClick = onClick;
    this.visible = true;
  }
}
