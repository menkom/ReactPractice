const generateId = () => {
    return Math.floor((1 + Math.random()) * 0x1000);
};

export default generateId;