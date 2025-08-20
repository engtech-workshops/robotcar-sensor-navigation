<script setup>
import SensorBasedTurningFlow from './components/SensorBasedTurningFlow.vue'
</script>

# Sensor-Based Turning

JetAuto has sensors (e.g., depth camera, LiDAR) to detect obstacles, allowing JetAuto to make decisions based on the environment.

## Example: Stop Before Obstacle

### How It Works
1. Move forward until an obstacle is detected.
2. Stop.
3. Turn until no obstacle ahead.
4. Continue moving.

<!-- ![Sensor-based turning flow](/public/images/05_sensor_based_turning_flow.svg) -->

<SensorBasedTurningFlow/>

```python
from jetauto import JetAuto
import time

car = JetAuto()

while True:
    dist = car.get_distance()  # in cm
    if dist > 20:
        car.move_forward(40)
    else:
        car.stop()
        car.turn_left(40)
        time.sleep(1)
```

---

**Activity**

- Drive forward until an obstacle is detected, then turn left.

- Try different distances for detection.

