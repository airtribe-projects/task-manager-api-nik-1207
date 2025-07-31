const z = require("zod");

const TaskDTO = z.object({
  title: z.string().trim(),
  description: z.string().trim(),
  completed: z.boolean().default(false),
});

module.exports = {
  TaskDTO
};
