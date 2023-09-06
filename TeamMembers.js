import React from 'react';
import './TeamMembers.css';

const TeamMembers = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      position: 'CEO',
      image: 'path_to_image',
    },
    {
      name: 'Jane Smith',
      position: 'Lead Engineer',
      image: 'path_to_image',
    },
    // Add more team members here
  ];

  return (
    <section className="team-members">
      <div className="team-members-header">
        <h2 className="team-members-title">Our Team</h2>
      </div>
      <div className="team-members-list">
        {teamMembers.map((member, index) => (
          <div className="team-member-card" key={index}>
            <img src={member.image} alt={member.name} className="team-member-photo" />
            <div className="team-member-details">
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-position">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamMembers;
