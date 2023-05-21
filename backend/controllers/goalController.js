const asyncHandler = require('express-async-handler');

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({message: "Get Goals"})
})

// @desc    Create goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  console.log(req.body.text)
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please Add a text field')
  }

  res.status(201).json({message: "Create Goals"})
})

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Update Goals ${req.params.id}`})
})

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({message: `Delete Goals ${req.params.id}`})
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}