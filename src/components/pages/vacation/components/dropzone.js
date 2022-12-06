import { createStyles, Title, Text } from '@mantine/core';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { useDropzone } from "react-dropzone";

const useStyles = createStyles((theme) => ({ //create styles allows to write css in js file
  wrapper: {
    position: 'relative',
    marginBottom: 30,
  },

  dropzone: {
    height: "40vh",
    width: "90%",
    marginLeft: "10%",
    borderRadius: "10px",
    borderWidth: "2px",
    borderStyle: "dashed",
    borderColor: theme.colors.dark[1],
    padding: "20%",
    textAlign: "center",
    transitionDelay: "100ms",

    '&:hover': {
        backgroundColor: theme.colors.gray[2],
        
        cursor: "pointer"
    }
  },

  disabledDropzone: {
    height: "40vh",
    width: "90%",
    marginLeft: "10%",
    borderRadius: "10px",
    borderWidth: "2px",
    borderStyle: "dashed",
    borderColor: theme.colors.dark[1],
    padding: "20%",
    textAlign: "center",
    backgroundColor: theme.colors.gray[2]
  },

  title: {
    fontSize: 20,
    },

    highlight: {
        color: theme.colors[theme.primaryColor][5],
        fontWeight: 500
      },

}));

export default function DropzoneButton({setImageFile, disabled}) {
  const { classes } = useStyles();

  const convertToBase64 = (file) => { //function to convert file to base64 as promise
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const { getRootProps, getInputProps } = useDropzone({ //setting reactdropzone, will get file, generate its bas64, and save it with its preview to imageFile
    accept: {
      "image/*": [],
    },
    noClick: false,
    multiple: false,
    noKeyboard: true,
    onDrop: async (acceptedFiles) =>{
        let file = acceptedFiles[0]
        const file_base64 = await convertToBase64(file)
          setImageFile(
            Object.assign(file, {
              preview: URL.createObjectURL(file),
              base64: file_base64
            })
          );
      }
  });
//setting inner here to reuse later
  const inner  = <span>< AddPhotoAlternateIcon className="icon" /> 
  <Title className={classes.title}>Upload a vacation picture</Title>
  <p>
  <Text component="span" inherit className={classes.highlight}>Select </Text>
  a picture to upload</p>
  <p>
    or 
    <Text component="span" inherit className={classes.highlight}> drag </Text>
     and 
     <Text component="span" inherit className={classes.highlight}> drop </Text>
      it here
  </p></span>

  return ( //shows disabled/non disabled dropzone based on disabled variable
    <div className={classes.wrapper}> 
      {disabled !== "disabled" ? <div {...getRootProps({ className: classes.dropzone })}>
          <input {...getInputProps()} />
          {inner}
        </div>
        : 

        <div className= {classes.disabledDropzone}>
          {inner}
        </div>
        }
    </div>
  );
}