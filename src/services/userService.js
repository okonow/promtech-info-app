class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async getUserById(id) {
        const user = await this.userRepository.getUserById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    async getAllUsers() {
        try {
            const users = await this.userRepository.getAllUsers();
            return users;
        } catch (error) {
            throw new Error('Failed to fetch users: ' + error.message);
        }
    }
}

export default UserService;