var expect = require('expect');

var {Users} = require('./users');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [
            {
                id: '1',
                name: 'Mike',
                room: 'Node Course'
            },
            {
                id: '2',
                name: 'Jen',
                room: 'React Course'
            },
            {
                id: '3',
                name: 'Tejas',
                room: 'Node Course'
            }
        ];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: 1,
            name: 'Tejas',
            room: 'Rome'
        }
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var resUser = users.removeUser('1');
        expect(resUser.id).toBe('1');
        expect(users.users.length).toEqual(2);
    });

    it('should not remove a user', () => {
        var resUser = users.removeUser('7');
        expect(resUser).toNotExist();
        expect(users.users.length).toEqual(3);
    });

    it('should find user', () => {
        var resUser = users.getUser('1');
        expect(resUser).toEqual({
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        });
    });

    it('should not find user', () => {
        var resUser = users.getUser('6');
        expect(resUser).toNotExist();
    });

    it('should return names for node course', () => {
        var usersList = users.getUserList('Node Course');

        expect(usersList).toEqual(['Mike', 'Tejas']);
    });

    it('should return names for react course', () => {
        var usersList = users.getUserList('React Course');

        expect(usersList).toEqual(['Jen']);
    });

});