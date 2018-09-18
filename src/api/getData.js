const getHomeData = () => (
    fetch('http://192.168.64.2/api/').then(res => res.json())
);

export default getHomeData;