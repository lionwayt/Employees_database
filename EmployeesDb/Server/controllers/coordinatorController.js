import Coordinator from "../models/Coordinator.js";
 
const getCoordinators = async (req, res) => {
    try {
        const coordinators = await Coordinator.find()
        return res.status(200).json({success: true, coordinators})
    } catch (error){
        return res.status(500).json({success: false, error: "Get Coordinator server error"})
    }
}
const addCoordinator = async (req, res) => {
   try {
       const {co_name, description} = req.body;
       const newCo = new Coordinator({
        co_name,
        description
       })
       await newCo.save()
       return res.status(200).json({success: true, coordinator: newCo})
   } catch(error) {
    console.log(error)
    return res.status(500).json({success: false, error: "add Coordinator server error"})
   }
}

const getCoordinator = async (req, res) => {
    try {
        const {id} = req.params;
        const coordinator = await Coordinator.findById({_id: id})
        return res.status(200).json({success: true, coordinator})
    } catch (error){
        return res.status(500).json({success: false, error: "get coordinator server error"})
    }
    }

    const updateCoordinator = async (req, res) => {
        try{
            const {id} = req.params;
            const {co_name, description} = req.body;
            const updateCo = await Coordinator.findByIdAndUpdate({_id: id}, {
                co_name,
                description
            })
            return res.status(200).json({success: true, updateCo})
        } catch (error) {
            return res.status(500).json({success: false, error: "Edit Coordinator server error"})
        }
        }

        const deleteCoordinator = async (req, res) => {
            try{
                const {id} = req.params;
        
                const deleteCo = await Coordinator.findById({_id: id})
                await deleteCo.deleteOne()
                return res.status(200).json({success: true, deleteCo})
            } catch (error) {
                return res.status(500).json({success: false, error: "Delete Coordinator server error"})
            }

        }
    



export {addCoordinator, getCoordinator, updateCoordinator, getCoordinators, deleteCoordinator}