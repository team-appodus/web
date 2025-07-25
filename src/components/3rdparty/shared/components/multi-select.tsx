import * as React from "react";
import {cva, type VariantProps} from "class-variance-authority";
import {CheckIcon, ChevronDown, WandSparkles, XCircle, XIcon,} from "lucide-react";

import {cn} from "@lib/utils";
import {Separator} from "@3rdparty/ui/separator";
import {Button} from "@3rdparty/ui/button";
import {Badge} from "@3rdparty/ui/badge";
import {Popover, PopoverContent, PopoverTrigger,} from "@3rdparty/ui/popover";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@3rdparty/ui/command";

/**
 * Variants for the multi-select component to handle different styles.
 * Uses class-variance-authority (cva) to define different styles based on "variant" prop.
 */
const multiSelectVariants = cva(
    "m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
    {
        variants: {
            variant: {
                default:
                    "border-foreground/10 text-foreground bg-card hover:bg-card/80",
                secondary:
                    "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive:
                    "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                inverted: "inverted",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

/**
 * Props for MultiSelect component
 */
interface MultiSelectProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof multiSelectVariants> {
    /**
     * An array of option objects to be displayed in the multi-select component.
     * Each option object has a label, value, and an optional icon.
     */
    options: any[],
    /**
     * Callback function triggered when the selected values change.
     * Receives an array of the new selected values.
     */
    onValueChange: (value: string[]) => void,
    /** The default selected values when the component mounts. */
    defaultValue?: string[],
    /**
     * Placeholder text to be displayed when no values are selected.
     * Optional, defaults to "Select options".
     */
    placeholder?: string,
    /**
     * Animation duration in seconds for the visual effects (e.g., bouncing badges).
     * Optional, defaults to 0 (no animation).
     */
    animation?: number,
    /**
     * Maximum number of items to display. Extra selected items will be summarized.
     * Optional, defaults to 3.
     */
    maxCount?: number,
    /**
     * The modality of the popover. When set to true, interaction with outside elements
     * will be disabled and only popover content will be visible to screen readers.
     * Optional, defaults to false.
     */
    modalPopover?: boolean,
    /**
     * If true, renders the multi-select component as a child of another component.
     * Optional, defaults to false.
     */
    asChild?: boolean,
    /**
     * If true, shows loading state when data
     * is async loading from Api .
     */
    isLoading?: boolean,
    /**
     * Additional class names to apply custom styles to the multi-select component.
     * Optional, can be used to add custom styles.
     */
    className?: string,
    /** Return type: array of strings or objects */
    returnType?: "string" | "object",
    dataKey?: string,
    optionLabel?: string,
    noResultText?: string | undefined
}

export const MultiSelect = React.forwardRef<
    HTMLButtonElement,
    MultiSelectProps
>(
    (
        {
            options,
            onValueChange,
            variant,
            defaultValue = [],
            placeholder = "Select options",
            returnType = "object",
            dataKey,
            animation = 0,
            maxCount = 3,
            modalPopover = false,
            // asChild = false,
            className,
            optionLabel,
            noResultText = 'No results found',
            // isLoading, 
            ...props
        },
        ref
    ) => {
        const isObjectType = returnType === "object";

        const getKey = (item: any) => (isObjectType && dataKey ? item[dataKey] : typeof item === 'object' && dataKey ? item[dataKey] : item);
        const getLabel = (item: any) => (isObjectType && optionLabel ? item[optionLabel] : typeof item === 'object' && dataKey ? item[dataKey] : item);
        const getIcon = (item: any) => (isObjectType && dataKey ? item[dataKey]?.icon : typeof item === 'object' && dataKey ? item[dataKey]?.icon : item?.icon);
        const [selectedValues, setSelectedValues] =
            React.useState<string[]>(defaultValue);
        const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
        const [isAnimating, setIsAnimating] = React.useState(false);

        const handleInputKeyDown = (
            event: React.KeyboardEvent<HTMLInputElement>
        ) => {
            if (event.key === "Enter") {
                setIsPopoverOpen(true);
            } else if (event.key === "Backspace" && !event.currentTarget.value) {
                const newSelectedValues = [...selectedValues];
                newSelectedValues.pop();
                setSelectedValues(newSelectedValues);
                onValueChange(newSelectedValues);
            }
        };


        const toggleOption = (option: any) => {
            // isSelected
            const key = getKey(option);
            const exists = selectedValues.some((item) => getKey(item) === key);

            const newSelectedValues = exists
                ? selectedValues.filter((item) => getKey(item) !== key)
                : [...selectedValues, option];
            const preparedItems = newSelectedValues.map((item: any) => returnType === "object" ? item : typeof item === 'object' && dataKey ? item[dataKey] : item);
            setSelectedValues(preparedItems);
            onValueChange(preparedItems);
        };

        const handleClear = () => {
            setSelectedValues([]);
            onValueChange([]);
        };

        // const handleTogglePopover = () => {
        //     setIsPopoverOpen((prev) => !prev);
        // };

        const clearExtraOptions = () => {
            const newSelectedValues = selectedValues.slice(0, maxCount);
            setSelectedValues(newSelectedValues);
            onValueChange(newSelectedValues);
        };

        const toggleAll = () => {
            if (selectedValues.length === options.length) {
                handleClear();
            } else {

                const allValues = options.map((option) => returnType === "object" ? option : option[dataKey!]);
                setSelectedValues(allValues);
                onValueChange(allValues);
            }
        };
        const isSelected = (option: any) =>
            selectedValues.some((item) => getKey(item) === getKey(option));
        return (
            <Popover
                open={isPopoverOpen}
                onOpenChange={setIsPopoverOpen}
                modal={modalPopover}
            >
                <PopoverTrigger asChild>
                    <Button
                        ref={ref}
                        {...props}
                        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
                        className={cn(
                            "flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-inherit hover:bg-inherit [&_svg]:pointer-events-auto",
                            className
                        )}
                    >
                        {selectedValues.length > 0 ? (
                            <div className="flex justify-between items-center w-full">
                                <div className="flex flex-wrap items-center">
                                    {selectedValues.slice(0, maxCount).map((item) => {
                                        const IconComponent = getIcon(item);
                                        const label = getLabel(item);

                                        return (
                                            <Badge
                                                key={getKey(item)}
                                                className={cn(
                                                    isAnimating ? "animate-bounce" : "",
                                                    multiSelectVariants({variant})
                                                )}
                                                style={{animationDuration: `${animation}s`}}
                                            >
                                                {IconComponent && (
                                                    <IconComponent className="h-4 w-4 mr-2"/>
                                                )}
                                                {label}
                                                <XCircle
                                                    className="ml-2 h-4 w-4 cursor-pointer"
                                                    onClick={(event: any) => {
                                                        event.stopPropagation();
                                                        toggleOption(item);
                                                    }}
                                                />
                                            </Badge>
                                        );
                                    })}
                                    {selectedValues.length > maxCount && (
                                        <Badge
                                            className={cn(
                                                "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                                                isAnimating ? "animate-bounce" : "",
                                                multiSelectVariants({variant})
                                            )}
                                            style={{animationDuration: `${animation}s`}}
                                        >
                                            {`+ ${selectedValues.length - maxCount} more`}
                                            <XCircle
                                                className="ml-2 h-4 w-4 cursor-pointer"
                                                onClick={(event: any) => {
                                                    event.stopPropagation();
                                                    clearExtraOptions();
                                                }}
                                            />
                                        </Badge>
                                    )}
                                </div>
                                <div className="flex items-center justify-between">
                                    <XIcon
                                        className="h-4 mx-2 cursor-pointer text-muted-foreground"
                                        onClick={(event: any) => {
                                            event.stopPropagation();
                                            handleClear();
                                        }}
                                    />
                                    <Separator
                                        orientation="vertical"
                                        className="flex min-h-6 h-full"
                                    />
                                    <ChevronDown className="h-4 mx-2 cursor-pointer text-muted-foreground"/>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center justify-between w-full mx-auto">
                <span className="text-sm text-muted-foreground mx-3">
                  {placeholder}
                </span>
                                <ChevronDown className="h-4 cursor-pointer text-muted-foreground mx-2"/>
                            </div>
                        )}
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    className="w-auto p-0"
                    align="start"
                    onEscapeKeyDown={() => setIsPopoverOpen(false)}
                >
                    <Command>
                        <CommandInput
                            placeholder="Search..."
                            onKeyDown={handleInputKeyDown}
                        />
                        <CommandList>

                            <CommandEmpty>{noResultText}</CommandEmpty>
                            <CommandGroup>
                                <CommandItem
                                    key="all"
                                    onSelect={toggleAll}
                                    className="cursor-pointer"
                                >
                                    <div
                                        className={cn(
                                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                            selectedValues.length === options.length
                                                ? "bg-primary text-primary-foreground"
                                                : "opacity-50 [&_svg]:invisible"
                                        )}
                                    >
                                        <CheckIcon className="h-4 w-4"/>
                                    </div>
                                    <span>(Select All)</span>
                                </CommandItem>
                                {options.map((option) => {
                                    // const isSelected1 = selectedValues.includes(option.value);
                                    //
                                    // const isSelected = (option: any) =>
                                    //     selectedValues.some((item) => getKey(item) === getKey(option));
                                    //
                                    // console.log('isSelected', isSelected);


                                    return (
                                        <CommandItem
                                            key={getKey(option)}
                                            onSelect={() => toggleOption(option)}
                                            className="cursor-pointer"
                                        >
                                            <div
                                                className={cn(
                                                    "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                                    isSelected(option)
                                                        ? "bg-primary text-primary-foreground"
                                                        : "opacity-50 [&_svg]:invisible"
                                                )}
                                            >
                                                <CheckIcon className="h-4 w-4"/>
                                            </div>
                                            {option.icon && (
                                                <option.icon className="mr-2 h-4 w-4 text-muted-foreground"/>
                                            )}
                                            <span>{getLabel(option)}</span>
                                        </CommandItem>
                                    );
                                })}
                            </CommandGroup>
                            <CommandSeparator/>
                            <CommandGroup>
                                <div className="flex items-center justify-between">
                                    {selectedValues.length > 0 && (
                                        <>
                                            <CommandItem
                                                onSelect={handleClear}
                                                className="flex-1 justify-center cursor-pointer"
                                            >
                                                Clear
                                            </CommandItem>
                                            <Separator
                                                orientation="vertical"
                                                className="flex min-h-6 h-full"
                                            />
                                        </>
                                    )}
                                    <CommandItem
                                        onSelect={() => setIsPopoverOpen(false)}
                                        className="flex-1 justify-center cursor-pointer max-w-full"
                                    >
                                        Close
                                    </CommandItem>
                                </div>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
                {animation > 0 && selectedValues.length > 0 && (
                    <WandSparkles
                        className={cn(
                            "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
                            isAnimating ? "" : "text-muted-foreground"
                        )}
                        onClick={() => setIsAnimating(!isAnimating)}
                    />
                )}
            </Popover>
        );
    }
);

MultiSelect.displayName = "MultiSelect";
