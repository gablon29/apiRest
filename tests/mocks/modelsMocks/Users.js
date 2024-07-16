import dbMock from "../dbmock";

const UserMock = dbMock.define('User', {
    id: 1,
    username: 'test_user',
    email: 'test_user@example.com'
  });
  
  export default UserMock;