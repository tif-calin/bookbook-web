import request from 'superagent';

const URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8001' 
  : 'https://openbookbook.herokuapp.com/'
;

const postReq = async (path, data) => {
  const resp = await request
    .post(`${URL}/${path}`)
    .send(data)
  ;

  if (resp.status >= 400) throw resp.body;

  return resp.body;
};

const getReq = async (path) => {
  const resp = await request.get(`${URL}/${path}`);

  if (resp.status >= 400) throw resp.body;

  return resp.body;
};

const putReq = async (path, data) => {
  const resp = await request
    .put(`${URL}/${path}`)
    .send(data)
  ;

  if (resp.status >= 400) throw resp.body;

  return resp.body;
};

const deleteReq = async (path) => {
  const resp = await request.delete(`${URL}/${path}`);

  if (resp.status >= 400) throw resp.body;

  return resp.body;
};

const addBallot = async (ballot) => postReq('api/ballots', ballot);
const updateBallot = async (ballot) => putReq(`api/ballots/${ballot.id}`, ballot);

const addSuggestion = async (suggestion) => postReq('api/suggestions', suggestion);
const getSuggestions = async (ballotid) => getReq(`api/${ballotid}/suggestions`);
const deleteSuggestion = async (id) => deleteReq(`api/suggestions/${id}`);

const getBallot = async (ballotid) => getReq(`api/ballots/${ballotid}`);

const addUser = async (user) => postReq('api/users', user);
const updateUser = async (user) => putReq(`api/users/${user.id}`, user);
const getUsers = async (ballotid) => getReq(`api/${ballotid}/users`);

export {
  addBallot,
  updateBallot,
  addSuggestion,
  getSuggestions,
  deleteSuggestion,
  getBallot,
  addUser,
  updateUser,
  getUsers
};
