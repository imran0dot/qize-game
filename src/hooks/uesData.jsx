const uesData = () => {
    return new Promise((resolve, reject) => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
                const categoryData = data.questions.filter(singleData => singleData.category === "mulitple-choices");
                resolve({data, categoryData})
            })
            .catch((err) => {
                reject(err);
            });
    });
};
export default uesData;