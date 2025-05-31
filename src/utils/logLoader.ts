
import { LogContent } from "@/data/chapters-data";

// Dynamic imports for log content
const logImports: Record<number, () => Promise<{ [key: string]: LogContent }>> = {
  1: () => import("@/data/logs/log-1"),
  2: () => import("@/data/logs/log-2"),
  3: () => import("@/data/logs/log-3"),
};

export const loadLogContent = async (logId: number): Promise<LogContent | null> => {
  try {
    const importFn = logImports[logId];
    if (!importFn) {
      return null;
    }
    
    const module = await importFn();
    const contentKey = `log${logId}Content`;
    return module[contentKey] || null;
  } catch (error) {
    console.error(`Failed to load content for log ${logId}:`, error);
    return null;
  }
};
