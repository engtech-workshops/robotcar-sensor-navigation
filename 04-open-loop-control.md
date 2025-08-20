<script setup>
import OpenLoopControl from './components/OpenLoopControl.vue'
</script>

# Open-Loop Navigation

Open-loop control runs movements without feedback — relying only on timing and motor power.


## Example Code: Square Path

We tell JetAuto to:
1. Move forward for 2 seconds.
2. Turn right for 1 second.
3. Repeat 4 times.

<OpenLoopControl />


```python
from jetauto import JetAuto
import time

car = JetAuto()

def forward(seconds):
    car.move_forward(50)  # speed %
    time.sleep(seconds)
    car.stop()

def turn_left(seconds):
    car.turn_left(50)
    time.sleep(seconds)
    car.stop()

for _ in range(4):
    forward(2)   # move forward for 2 seconds
    turn_left(1) # turn for 1 second
```

---

**Activity**

- Does JetAuto go back to its original position? Why?

- Try to make JetAuto follow an L-shaped path.

- Increase speed and see how accuracy changes.

- Discuss: What is the weakness of this type of control? How can it be improved?


