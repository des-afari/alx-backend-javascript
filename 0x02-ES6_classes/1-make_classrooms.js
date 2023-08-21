import ClassRoom from './0-classroom';

export default function initializeRooms(arr = [19, 20, 34]) {
  const container = [];

  for (const item of arr) {
    container.push(new ClassRoom(item));
  }

  return container;
}
