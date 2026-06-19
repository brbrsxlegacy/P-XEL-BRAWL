export class Player {
  constructor() {
    this.x = 300
    this.y = 100

    this.width = 48
    this.height = 64

    this.vx = 0
    this.vy = 0

    this.speed = 0.7
    this.jumpPower = -14
    this.onGround = false

    this.damage = 0
  }

  move(direction) {
    this.vx += direction * this.speed
  }

  jump() {
    if (this.onGround) {
      this.vy = this.jumpPower
      this.onGround = false
    }
  }
}
