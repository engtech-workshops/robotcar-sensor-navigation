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

### Code 1
1. Add `#` in front of the `rosrun ...` commands you have added in the previous exercise. This makes the commands to be comments that will not be executed when the script is run.

2. Add the following line in the file
```bash
rosrun jetauto_movement obstacle_distance.py
```

3. Run the `launch.sh` file in the terminal.

4. The terminal will show you the distance of the object in front of the JetAuto using LiDAR.

5. Press <kbd>Ctrl</kbd>+<kbd>C</kbd> multiple times to stop the program.

### Code 2
1. Change the line to 
```bash
rosrun jetauto_movement obstacle_avoidance.py
```

2. This program is a simple obstacle avoidance program. Can you figure out how it works?

