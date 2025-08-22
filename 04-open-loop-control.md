<script setup>
import OpenLoopControl from './components/OpenLoopControl.vue'
</script>

# Open-Loop Navigation

Open-loop control runs movements without feedback — relying only on timing and motor power.

## Control the JetAuto

1. Go to `/home/jetauto/jetauto_workshop/`.
2. Open the `launch.sh` script.
3. Do not change the following lines.

```bash
#!/bin/bash

export ROS_MASTER_URI=http://localhost:11311
source /home/jetauto/jetauto_workshop/devel/setup.sh
```

4. After these lines, you will put in the commands to move the JetAuto. JetAuto can move `forward`, `backward`, `turnleft`, `turnright`, `shiftleft`, and `shiftright`.

To move forward for 2 seconds,
```bash
rosrun jetauto_movement move.py forward 2 
```

5. You can run the program by 
   1. opening the "Terminator" app (the red grid icon on the left),
   2. put in the command
   ```bash
   cd ~/jetauto_workshop
   ```
   3. run the program by putting in the command
   ```bash
   ./launch.sh
   ```

6. Try to move the JetAuto following the instructions in the next section.

## Example Code: Square Path

We tell JetAuto to:
1. Move forward for 2 seconds.
2. Turn right for 1 second.
3. Repeat 4 times.

<OpenLoopControl />



## Note

JetAuto is running on ROS (Robot Operating System), a platform that provides useful tools to operate a robots with multiple inputs and outputs. The exact commands to control the motors to move the wheels are more complicated as you have seen above. 

We have created simplified functions to introduce basic concepts. In fact, if we can go more in-depth, there are lots more that we can do with the JetAuto.

---

**Activity**

- Does JetAuto go back to its original position? Why?

- Try to make JetAuto follow an L-shaped path.

- Increase speed and see how accuracy changes.

- Discuss: What is the weakness of this type of control? How can it be improved?


