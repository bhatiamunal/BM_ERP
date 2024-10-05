class CommonModule {
    constructor() {
        // Initialize any properties needed across modules
        this.appName = 'My Node App';
    }

    log(message) {
        console.log(`[${this.appName}] ${message}`);
    }

    formatError(error) {
        return {
            success: false,
            message: error.message || 'An error occurred',
        };
    }

    formatSuccess(data) {
        return {
            success: true,
            data,
        };
    }
}

module.exports = new CommonModule(); // Exporting an instance of the class