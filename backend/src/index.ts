import { app } from './app';
import { config } from './config';
import { logger } from './config/logger';

app.listen(config.port, () => {
  logger.info(`⚡ CortexAI OS Enterprise AI Gateway Server running on port ${config.port}`);
});
