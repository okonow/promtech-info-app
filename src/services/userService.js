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

    async createUser(userData) {
        // Validate required fields
        if (!userData.first_name || !userData.last_name || !userData.email) {
            throw new Error('Missing required fields: first_name, last_name, email');
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userData.email)) {
            throw new Error('Invalid email format');
        }

        return await this.userRepository.createUser(userData);
    }

    async updateUser(id, userData) {
        // Check if user exists
        const existingUser = await this.userRepository.getUserById(id);
        if (!existingUser) {
            throw new Error('User not found');
        }

        // If email is being updated, validate it
        if (userData.email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(userData.email)) {
                throw new Error('Invalid email format');
            }
        }

        return await this.userRepository.updateUser(id, userData);
    }

    async deleteUser(id) {
        // Check if user exists
        const existingUser = await this.userRepository.getUserById(id);
        if (!existingUser) {
            throw new Error('User not found');
        }

        return await this.userRepository.deleteUser(id);
    }
}

export default UserService;