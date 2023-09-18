const uesData = () => {
    return new Promise((resolve, reject) => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => resolve(data))
            .catch((err) => {
                reject(err);
            });
    });
};
export default uesData;