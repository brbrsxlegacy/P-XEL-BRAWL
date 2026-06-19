export class Physics {
  constructor() {
    this.gravity = 0.65
    this.friction = 0.82
  }

  apply(player) {
    player.vy += this.gravity

    player.x += player.vx
    player.y += player.vy

    player.vx *= this.friction
  }
}
