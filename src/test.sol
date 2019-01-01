pragma solidity ^0.5.0;

contract Test {
    string firstName;
    string lastName;
    string bio;
    string email;
    string password;

    Test tests = Test[];

    function createTest(string _firstName, string _lastName, string _bio, string _email, string _password) public {
        Test test = Test(_firstName, _lastName, _bio, _email, _password);
        tests.push(test);
    }
}