import stylesInfos from '../styles/Infos.module.css'
import Card from './Card'

const Infos = () => {
    return (
        <div className={`${stylesInfos.container} ${stylesInfos.flex} bg-secondary`}>
            <h1 style={{"alignSelf":"center"}}>Soluções para seu laboratório</h1>
            <div className={`${stylesInfos.flexGrid}`}>
            <Card title={<i class="fas fa-flask icon"></i>} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt porro illum, asperiores omnis, molestiae tempora mollitia eaque labore laudantium sit quae error corporis. Eveniet culpa eos porro tenetur natus.'/>
            <Card title={<i class="fas fa-graduation-cap icon"></i>} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt porro illum, asperiores omnis, molestiae tempora mollitia eaque labore laudantium sit quae error corporis. Eveniet culpa eos porro tenetur natus.'/>
            <Card title={<i class="far fa-comments icon"></i>} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nesciunt porro illum, asperiores omnis, molestiae tempora mollitia eaque labore laudantium sit quae error corporis. Eveniet culpa eos porro tenetur natus.'/>
            </div>
            
        </div>
    )
}

export default Infos
