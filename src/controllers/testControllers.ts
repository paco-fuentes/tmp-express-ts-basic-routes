import { Request, Response } from "express";

// get test
const getTest = (req: Request, res: Response) => {
    // logic for get
    return res.send('GET TEST');
};
// get test by id
const getTestById = (req: Request, res: Response) => {
    // logic for get by id
    // console.log(req.params);
    const testId = req.params.id;
    return res.send('GET TEST WITH ID: ' + testId);
}

// post test
const createTest = (req: Request, res: Response) => {
    //logic to post-create
    // console.log(req.body);
    return res.send('POST-CREATE TEST');
};

// post test by id
const createTestById = (req: Request, res: Response) => {
    // logic to post-create by id
    console.log(req.params);
    console.log(req.body.test1);
    console.log(req.body.test2);
    const testId = req.params.id;
    return res.send('POST-CREATE TEST WITH ID: ' + testId);
};

// put test
const updateTest = (req: Request, res: Response) => {
    // logic to put - update
    return res.send('PUT-UPDATE TEST');
}

// put test by id
const updateTestById = (req: Request, res: Response) => {
    // logic to put - update by id
    // console.log(req.params);
    const testId = req.params.id;
    return res.send('UPDATE TEST BY ID ' + testId);
}

// delete film
const deleteTest = (req: Request, res: Response) => {
    // logic to delete data
    return res.send('DELETE TEST');
}

// delete test by id
const deleteTestById = (req: Request, res: Response) => {
    // logic to delete data by id
    // console.log(req.params);
    const testId = req.params.id;
    return res.send('DELETE TEST BY ID: ' + testId);
}

// export crud
export {
    getTest,
    getTestById,
    createTest,
    createTestById,
    updateTest,
    updateTestById,
    deleteTest,
    deleteTestById
};