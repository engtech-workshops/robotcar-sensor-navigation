# How Cars Move

Before we start coding, let's understand how different types of vehicles move.

---

## 1. Two-Wheel Drive (Differential Drive)
- Powered wheels: 2
- Steering: Achieved by varying wheel speeds
- Example: Many robots (including JetAuto) use this method

**How it works:**
- Both wheels forward at same speed → straight movement
- Left wheel faster than right → turns right
- Right wheel faster than left → turns left
- Wheels spin opposite directions → rotates in place

![Differential drive](./images/01_differential_drive_top.svg)

---

## 2. Four-Wheel Drive
- All wheels powered
- Better traction, often used in off-road robots
- Can still use differential steering if wheels are fixed

![Four-wheel drive](./images/02_four_wheel_drive.svg)

---

## 3. Turning Mechanisms

### Ackermann Steering
- Used in real cars
- Front wheels steer at different angles for smooth turns

### Differential Steering
- No steering wheel; turning is done by speed difference in wheels
- Advantage: Can rotate in place (zero turning radius)
- JetAuto uses this

![Ackermann vs differential turning](./images/03_turning_ackermann_vs_differential.svg)

---

**In summary:**  
JetAuto is a 4-wheel chassis but moves like a 2-wheel differential drive.
