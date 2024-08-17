const debounce = (func: (...args: any[]) => void, delay: number) => {
    // Declare a variable to store the timeout ID
    let timeoutId: NodeJS.Timeout;

    // Return a new function that will be called instead of the original function
    return (...args: any[]) => {
        // If a timeout already exists, clear it to reset the delay
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        // Set a new timeout to call the function after the specified delay
        timeoutId = setTimeout(() => {
            // Call the original function with the provided arguments
            func(...args);
        }, delay);
    };
};

export default debounce;
