import { LogContent } from "@/data/chapters-data";

// Dynamic imports for log content - will be added as logs are created
const logImports: Record<number, () => Promise<{ [key: string]: LogContent }>> = {
  1: () => import("@/data/logs/log-1").then(module => ({ log1Content: module.log1Content }))
};

export const loadLogContent = async (logId: number): Promise<LogContent | null> => {
  try {
    const importFn = logImports[logId];
    if (!importFn) {
      console.log(`No content available for log ${logId}`);
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
