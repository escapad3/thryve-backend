const axios = require('axios');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const config = require('../config/config');

/**
 * Get top 3 sunny places within 50 miles of given place.
 * @param {ObjectId} searchText
 * @returns {ObjectId}
 */
const searchPlaces = async (searchText) => {
  const googleMapsUrl = 'https://maps.googleapis.com/maps/api/';
  const apiKey = config.googleMapsApiKey;
  const requestUrl = `${googleMapsUrl}place/autocomplete/json?input=${searchText}&types=geocode&key=${apiKey}`;

  const requestConfig = {
    method: 'get',
    url: requestUrl,
    headers: {},
  };

  const result = await axios(requestConfig);
  if (!result || !result.data || !result.data.predictions) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Failed to search for places');
  }
  return result.data.predictions.map((place) => ({ name: place.description, place_id: place.place_id }));
};

module.exports = {
  searchPlaces,
};
