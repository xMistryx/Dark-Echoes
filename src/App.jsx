import { useState } from "react";
import { episodeList as episodeData } from "./data";

const App = () => {
    const [episodes] =  useState(episodeData);
    const [selectedEpisode, setSelectedEpisode] = useState();

    const EpisodeList = () => {
        return (
            <section className="episode-list">
                <h2>Episodes</h2>
                <ul>
                    {episodes.map((episode) => (
                        <li
                            key={episode.id}
                            className="episode-card"
                            onClick={() => setSelectedEpisode(episode)}
                        >
                            {episode.title}
                        </li>
                    ))}
                </ul>
            </section>
        );
    };

    const EpisodeDetails = () => {
        return (
            <section className="episode-details">
                {!selectedEpisode ? (
                    <>
                        <h2>No Episode Selected</h2>
                        <p>Select an episode for more details</p>
                    </>
                ) : (
                    <>
                        <h2>Episode {selectedEpisode.id}</h2>
                        <div className="episode-info-text">
                            <h3>{selectedEpisode.title}</h3>
                            <p>{selectedEpisode.description}</p>
                        </div>
                        <button>Watch Now</button>
                    </>
                )}
            </section>
        );
    };
    
    return (
        <div>
            <header>
                <h1>Dark Echoes</h1>
            </header>
            <main>
                <EpisodeList />
                <EpisodeDetails />
            </main>
        </div>
    );
};

export default App;