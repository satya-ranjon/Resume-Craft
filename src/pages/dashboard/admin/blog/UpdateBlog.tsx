import { FC, useState, useRef, useEffect } from "react";
import useTitleSet from "../../../../hooks/useTitleSet";
import { CiImageOn } from "react-icons/ci";
import InputTextEditor from "../../../../components/common/InputTextEditor";
import Button from "../../../../components/common/Button";
import { BiLoaderAlt } from "react-icons/bi";
import { TagsInput } from "react-tag-input-component";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { selectSingleBlog } from "../../../../services/blogs/blogSelector";
import { useParams } from "react-router-dom";
import { RootState } from "../../../../app/store";
const baseUrl = import.meta.env.VITE_BASE_URL_API;
const allowedFileTypes = ["image/jpg", "image/jpeg", "image/png"];

interface IState {
  title: string;
  content: string;
  image: {
    public_id: string;
    url: string;
  };
  tags: string[];
}
const initialState = {
  title: "",
  content: "",
  image: {
    public_id: "",
    url: "",
  },
  tags: ["News"],
};

const UpdateBlog: FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<IState>(initialState);
  const { id } = useParams();
  const data = useSelector((state: RootState) =>
    selectSingleBlog(state, id || "")
  );

  useEffect(() => {
    setState({
      title: data?.title || "",
      content: data?.content || "",
      image: {
        public_id: data?.image.public_id || "",
        url: data?.image.url || "",
      },
      tags: data?.tags || [],
    });
  }, [id]);

  const getData = async () => {
    try {
      const response = await fetch(`${baseUrl}/blog/v1/single/${id}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        setState({
          title: data.blog?.title || "",
          content: data?.blog.content || "",
          image: {
            public_id: data?.blog.image.public_id || "",
            url: data?.blog.image.url || "",
          },
          tags: data?.blog.tags || [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!data?._id) {
      getData();
    }
  }, []);

  useTitleSet("Create Blog");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageSelect = () => {
    if (inputRef.current) {
      inputRef.current?.click();
    }
  };

  const imageUpload = async () => {
    if (selectedFile && allowedFileTypes.includes(selectedFile?.type)) {
      try {
        const formData = new FormData();
        formData.append("blogImage", selectedFile);

        const response = await fetch(`${baseUrl}/blog/v1/imageUpload`, {
          method: "POST",
          credentials: "include",
          body: formData,
        });
        const data = await response.json();
        return data.image;
      } catch (error) {
        console.log(error);
      }
    }
    return { public_id: "", url: "" };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (
        !(selectedFile || state.image.url) ||
        !state.title ||
        !state.content ||
        state.tags.length === 0
      ) {
        setLoading(false);
        Swal.fire({
          icon: "error",
          text: "Invalid input!",
          showConfirmButton: false,
          timer: 1000,
        });
        return;
      }
      const { public_id, url } = await imageUpload();
      if ((public_id && url) || state.image.url) {
        const blogData = {
          ...state,
          image: public_id ? { public_id, url } : state.image,
        };
        const response = await fetch(`${baseUrl}/blog/v1/update/${id}`, {
          method: "PATCH",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        });
        const data = await response.json();
        if (!data.success) {
          Swal.fire({
            icon: "error",
            text: data.message,
            showConfirmButton: false,
            timer: 1000,
          });
          setLoading(false);
        }
        if (data.success) {
          setLoading(false);
          Swal.fire({
            icon: "success",
            text: "Successfully Update Blog",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div
      style={{ height: window.innerHeight }}
      className="p-10 overflow-scroll pb-20">
      <h1 className="text-4xl text-c-dark-light font-bold ">Create Blog</h1>
      <form onSubmit={handleSubmit} className="  space-y-4 mt-10">
        <input
          type="text"
          className="w-full text-3xl px-4 py-3 rounded-md outline-none focus:border-c-primary  border-[1.8px] placeholder:font-semibold placeholder:text-gray-400 placeholder:text-3xl text-c-dark"
          placeholder=" Title.."
          value={state.title}
          onChange={(e) =>
            setState((prv) => ({ ...prv, title: e.target.value }))
          }
        />
        <div
          onClick={handleImageSelect}
          className=" bg-gray-100 rounded-md overflow-hidden w-full h-80 cursor-pointer text-7xl flex justify-center items-center">
          {selectedFile ? (
            <img
              src={URL.createObjectURL(selectedFile)}
              alt="image"
              className=""
            />
          ) : state.image.url ? (
            <img src={state.image.url} alt="image" className="" />
          ) : (
            <CiImageOn />
          )}
          <input
            type="file"
            accept="image/jpeg, image/jpg, image/png"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) {
                setSelectedFile(files[0]);
              }
            }}
            className=" hidden"
            ref={inputRef}
          />
        </div>
        <InputTextEditor
          height="400px"
          initialValue={state.content}
          getValue={(data: string) => {
            setState((prv) => ({ ...prv, content: data }));
          }}
        />
        <TagsInput
          value={state.tags}
          onChange={(data) => {
            setState((prv) => ({ ...prv, tags: data }));
          }}
          name="tags"
          placeHolder="blogs tags"
        />
        <div className=" w-full flex justify-center items-center">
          <Button disabled={loading} icon={false}>
            <div className=" flex justify-start items-center gap-1">
              Update
              {loading && <BiLoaderAlt className="animate-spin text-xl" />}
            </div>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;
