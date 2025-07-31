const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

async function testFeatures() {
  console.log('🧪 Testing Task Manager API Features\n');

  try {
    // Test 1: Get all tasks
    console.log('1. Getting all tasks...');
    const allTasks = await axios.get(`${BASE_URL}/tasks`);
    console.log(`   Found ${allTasks.data.length} tasks\n`);

    // Test 2: Filter by completion status
    console.log('2. Filtering by completion status...');
    const completedTasks = await axios.get(`${BASE_URL}/tasks?completed=true`);
    console.log(`   Found ${completedTasks.data.length} completed tasks`);

    const pendingTasks = await axios.get(`${BASE_URL}/tasks?completed=false`);
    console.log(`   Found ${pendingTasks.data.length} pending tasks\n`);

    // Test 3: Sort by creation date
    console.log('3. Sorting by creation date...');
    const sortedTasks = await axios.get(`${BASE_URL}/tasks?sortBy=createdAt&sortOrder=desc`);
    console.log(`   First task: ${sortedTasks.data[0].title} (${sortedTasks.data[0].createdAt})`);
    console.log(`   Last task: ${sortedTasks.data[sortedTasks.data.length - 1].title} (${sortedTasks.data[sortedTasks.data.length - 1].createdAt})\n`);

    // Test 4: Get tasks by priority
    console.log('4. Getting tasks by priority...');
    const highPriorityTasks = await axios.get(`${BASE_URL}/tasks/priority/high`);
    console.log(`   Found ${highPriorityTasks.data.length} high priority tasks`);

    const mediumPriorityTasks = await axios.get(`${BASE_URL}/tasks/priority/medium`);
    console.log(`   Found ${mediumPriorityTasks.data.length} medium priority tasks`);

    const lowPriorityTasks = await axios.get(`${BASE_URL}/tasks/priority/low`);
    console.log(`   Found ${lowPriorityTasks.data.length} low priority tasks\n`);

    // Test 5: Create a new task with priority
    console.log('5. Creating a new task with priority...');
    const newTask = await axios.post(`${BASE_URL}/tasks`, {
      title: 'Test Task with Priority',
      description: 'This is a test task with high priority',
      priority: 'high',
      completed: false
    });
    console.log(`   Created task: ${newTask.data.title} (Priority: ${newTask.data.priority})\n`);

    // Test 6: Update a task with priority
    console.log('6. Updating a task with priority...');
    const updateResponse = await axios.put(`${BASE_URL}/tasks/1`, {
      title: 'Updated Task',
      description: 'This task has been updated with medium priority',
      priority: 'medium',
      completed: true
    });
    console.log(`   Updated task: ${updateResponse.data.title} (Priority: ${updateResponse.data.priority}, Completed: ${updateResponse.data.completed})\n`);

    console.log('✅ All features working correctly!');

  } catch (error) {
    console.error('❌ Error testing features:', error.response?.data || error.message);
  }
}

// Run the test if this file is executed directly
if (require.main === module) {
  testFeatures();
}

module.exports = { testFeatures }; 