const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { gmapsService } = require('../services');

const searchPlaces = catchAsync(async (req, res) => {
  const places = await gmapsService.searchPlaces(req.params.searchText);
  if (!places) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to search for places');
  }
  res.send(places);
});

module.exports = {
  searchPlaces,
};
