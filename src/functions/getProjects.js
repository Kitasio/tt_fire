import { ref } from 'vue'
import { db } from '../firebase/config'

const getProjects = () => {
    const projects = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            const res = await db.collection("projects").get()
            projects.value = res.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            })
            console.log(projects.value)
        } catch (err) {
            console.log(err)
        }
    }

    return { projects, error, load }
}

export default getProjects