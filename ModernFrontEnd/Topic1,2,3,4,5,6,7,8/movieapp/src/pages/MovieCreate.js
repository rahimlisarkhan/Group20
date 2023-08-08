import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "shared/hooks/useForm";
import { ADD_MOVIES } from "shared/provider/GlobalProvider/types";
import { useGlobalState } from "shared/provider/GlobalProvider/useGlobalState";

const MovieCreate = () => {
  const { dispatch } = useGlobalState();
  const navigate = useNavigate();

  const { form, handleFormChange, handleFormSubmit, isEmptyField } = useForm({
    initialForm: {
      Title: "",
      Year: "",
      Poster: "",
    },
    onSubmit: (data) => {
      dispatch({ type: ADD_MOVIES, payload: data });
      toast.success("Succesfully created");
      navigate("/favorite");
    },
  });

  return (
    <div>
      <h1 className="text-light mb-2 pt-5">Create</h1>

      <div>
        <div class="mb-3">
          <img
            width={300}
            height={300}
            className="rounded mb-2"
            style={{ objectFit: "cover" }}
            src={
              form.Poster
                ? form.Poster
                : "https://icones.pro/wp-content/uploads/2022/07/icones-d-administration-jaunes.png"
            }
          />
          <br />

          <label for="exampleFormControlInput1" class="form-label text-white">
            Image url
          </label>
          <input
            class="form-control"
            placeholder="url"
            name="Poster"
            onChange={handleFormChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-white">
            Title
          </label>
          <input
            type="email"
            class="form-control"
            placeholder="Movie name"
            name="Title"
            onChange={handleFormChange}
          />
        </div>
        <div class="mb-3">
          <label
            for="exampleFormControlTextarea1"
            class="form-label text-white"
          >
            Year
          </label>
          <textarea
            class="form-control"
            rows="2"
            name="Year"
            onChange={handleFormChange}
          ></textarea>
        </div>

        <Button
          variant="success"
          disabled={isEmptyField}
          onClick={handleFormSubmit}
        >
          Create
        </Button>
      </div>
    </div>
  );
};

export default MovieCreate;
