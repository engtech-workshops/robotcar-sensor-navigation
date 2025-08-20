<script setup>
import LidarScanIllustration from './components/LidarScanIllustration.vue'
</script>
# Autonomous Driving and SLAM

SLAM = Simultaneous Localization and Mapping.  

It allows a robot to **map** its environment while **tracking** its position. Imagine the process of SLAM as being you in a new mall. 

1. First, you get familiar with the mall, (perhaps going around the mall first).
2. During the next visit, you first find out where you are in the mall, and find out how to go to the shop you want to go.

Now change the mall to a map, and replace yourself with a robot.

1. First the robot has to learn about the map environment.
2. Then to go to anywhere, the robot has to identify where it is (a.k.a. localisation) and plan the route to get to the desired location.

<!-- ## SLAM Process -->
<!-- ![SLAM pipeline](/public/images/07_slam_pipeline.svg) -->

<!-- 1. **Sensor input** (LiDAR, camera). -->
<!-- 2. **Feature extraction**. -->
<!-- 3. **Pose estimation**. -->
<!-- 4. **Map update**. -->
<!-- 5. **Loop closure** for correction. -->

<!-- --- -->

<!-- ## LiDAR Mapping Example -->
<!-- ![LiDAR scan](/public/images/08_lidar_scan.svg) -->

<LidarScanIllustration />

You may refer to [this explanation](https://www.mathworks.com/discovery/slam.html) for more details.

With SLAM, JetAuto can:
- Build a 2D map of the area.
- Plan optimal routes.
- Avoid dynamic obstacles.

**Real-World Use:**  
Self-driving cars, warehouse robots, delivery bots.
