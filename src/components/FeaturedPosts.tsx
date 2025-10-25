import { useMemo, memo } from 'react';

const TeamMemberCard = memo(({ member }: { member: any }) => (
  <div className="group transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-3">
    <div className="overflow-hidden rounded-3xl shadow-lg w-[180px] transition-shadow duration-300 ease-out group-hover:shadow-2xl">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          loading="eager"
          decoding="async"
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
        />
      </div>
    </div>
  </div>
));

TeamMemberCard.displayName = 'TeamMemberCard';

export const FeaturedPosts = memo(function FeaturedPosts() {
  const teamMembers = [
    {
      id: 1,
      name: 'Risvi Chatterji',
      position: 'Design Head',
      image: `/characters/Risvi Chatterji.png?v=${Date.now()}`
    },
    {
      id: 2,
      name: 'Alfred T Manoj',
      position: 'Creative Head',
      image: `/assets/Alfred T Manoj.png?v=${Date.now()}`
    },
    {
      id: 3,
      name: 'Abhishankar S',
      position: 'Social Media Manager',
      image: `/assets/Abhishankar S.png?v=${Date.now()}`
    },
    {
      id: 4,
      name: 'Alfin T Manoj',
      position: 'Web Designer',
      image: `/assets/Alfin T Manoj.png?v=${Date.now()}`
    },
    {
      id: 5,
      name: 'Abhinandh K M',
      position: 'Digital Marketing Head',
      image: `/assets/Abhinandh K M.png?v=${Date.now()}`
    },
    {
      id: 6,
      name: 'Rakesh Ravi',
      position: 'Data Analyst',
      image: '/assets/Rakesh.png'
    }
  ];

  return (
    <>
      <section id="team" className="py-20 px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* Heading */}
          <h2
            className="text-7xl font-bold mb-2 leading-tight text-center max-w-4xl mx-auto mb-12"
            style={{
              fontWeight: "900",
              fontSize: "clamp(2rem, 6.5vw, 3.5rem)",
              lineHeight: "0.98",
              letterSpacing: "-0.02em",
              color: "#0f0f10",
              fontFamily: "Bricolage Grotesque, sans-serif",
            }}
          >
            Meet Our Team
          </h2>

          {/* Team Grid - No loading states, direct display */}
          <div className="flex flex-nowrap justify-center gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Space for footer */}
      <div className="h-20"></div>
    </>
  );
});