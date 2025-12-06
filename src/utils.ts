import { SessionType } from "./types";

export function hasTimeConflict(session1: SessionType, session2: SessionType): boolean {
  const start1 = parseTime(session1.time);
  const end1 = parseTime(session1.endTime);
  const start2 = parseTime(session2.time);
  const end2 = parseTime(session2.endTime);

  return start1 < end2 && start2 < end1;
}

function parseTime(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}
