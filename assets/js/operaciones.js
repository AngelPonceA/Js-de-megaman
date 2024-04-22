import { robots } from "./robots.js";

export const getRobotsBySeries = (series = 2) => {
    return robots.filter((robot) => {
        return robot.series === series;
    });
}

export const getRobotsById = (id = "009") => {
    return robots.find((robot) => {
        return robot.id === id;
    });
}

export const createCard = (data) => {
    const card = `
    <div class="col-lg-4 col-ml-6">
        <div class="card">
            <img src="$(data.avatar || data.img)">
            <div class="card-body">
                <h5> ROBOTS </h5>
                <p>  </p>
            </div>
        </div>
    </div>
    const card = 
    return card
    `;
};

export const renderCard = (data, containerId)
    const container = document.getElementById