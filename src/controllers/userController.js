class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    async getUserById(req, res) {
        try {
            const { id } = req.params;
            const user = await this.userService.getUserById(id);
            res.json(user);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await this.userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ 
                message: 'Error fetching users',
                error: error.message 
            });
        }
    }
}

export default UserController;