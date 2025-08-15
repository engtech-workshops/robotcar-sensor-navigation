# Autonomous Driving and SLAM

SLAM = Simultaneous Localization and Mapping.  
It allows a robot to **map** its environment while **tracking** its position.

## SLAM Process
![SLAM pipeline](./images/07_slam_pipeline.svg)

1. **Sensor input** (LiDAR, camera).
2. **Feature extraction**.
3. **Pose estimation**.
4. **Map update**.
5. **Loop closure** for correction.

---

## LiDAR Mapping Example
![LiDAR scan](./images/08_lidar_scan.svg)

With SLAM, JetAuto can:
- Build a 2D map of the area.
- Plan optimal routes.
- Avoid dynamic obstacles.

**Real-World Use:**  
Self-driving cars, warehouse robots, delivery bots.
