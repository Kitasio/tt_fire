import { ref } from 'vue'
import { db } from '../firebase/config'

const getProject = () => {
    const project = ref([])
    const error = ref(null)

    const load = async (id) => {
        try {
            const res = await db.collection("projects").doc(id).get()
            project.value = res.data()
            console.log(project.value.url)
        } catch (err) {
            console.log(err)
        }
    }

    return { project, error, load }
}

export default getProject