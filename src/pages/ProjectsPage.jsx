import Projects from '../components/Projects'
import CTA from '../components/CTA'

const ProjectsPage = () => {
    return (
        <div className="pt-20">
            <Projects limit={null} showViewAll={false} />  
            <CTA />
        </div>
    )
}

export default ProjectsPage